Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  # Add the mutation's derived field to the mutation type
  field :createPost, field: Mutations::CreatePost.field
  field :deletePost, field: Mutations::DeletePost.field
end
