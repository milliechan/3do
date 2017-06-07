Mutations::DeletePost = GraphQL::Relay::Mutation.define do
  name "DeletePost"
  input_field :id, !types.ID
  return_field :post, Types::PostType
  resolve -> (object, args, ctx) {
    post = Post.find(args[:id])
    { post: post.destroy }
  }
end
