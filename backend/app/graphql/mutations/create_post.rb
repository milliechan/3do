Mutations::CreatePost = GraphQL::Relay::Mutation.define do
  # Used to name derived types, eg `"AddCommentInput"`:
  name "CreatePost"

  #accessible from `inputs` in the resolve function:
  input_field :title, !types.String

  # the result has access to these fields,
  # resolve must return a hash with these keys.
  # on the client-side this would be configured
  # as RANGE_ADD mutation, so our returned fields
  # must conform to that API
  return_field :post, Types::PostType

  # the resolve proc is where you alter the system state.
  resolve -> (object, inputs, ctx) {
    new_post = Post.create!(title: inputs[:title])
    response = {
      post: new_post
    }
  }
end
