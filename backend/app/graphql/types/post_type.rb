Types::PostType = GraphQL::ObjectType.define do
  name "Post"
  description "A todo post"
  field :id, !types.ID
  field :title, !types.String
end
