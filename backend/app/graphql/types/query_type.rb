Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :post do
    type Types::PostType
    argument :id, !types.ID
    description "Find a Post by ID"
    resolve ->(obj, args, ctx) { Post.find(args[:id]) }
  end

  field :posts do
    type types[Types::PostType]
    argument :title, !types.String
    description "Find all posts"
    resolve ->(obj, args, ctx) do
      if args[:title].present?
        return Post.where(title: args[:title])
      end
      Post.all
    end
  end
end
