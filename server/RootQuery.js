import UserType from "./graphQLSchema.js";
import UsersModel from "./models/users.js";
import {GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql/type/index.js";

const RootQueryType = new GraphQLObjectType(
    {
        name: 'Query',
        description: 'Root Query',
        fields: () => (
            {
                users: {
                    type: new GraphQLList(UserType),
                    description: 'List of all users',
                    resolve: async () => await UsersModel.find()
                },
                user : {
                    type: new GraphQLList(UserType),
                    description: 'Single User',
                    args: {
                        _id: {type: new GraphQLNonNull(GraphQLString)}
                    },
                    resolve: async (parent, args) =>{
                        return await UsersModel.find({_id: args._id})
                    }
                }
            }
        )
    }
)

export default RootQueryType;