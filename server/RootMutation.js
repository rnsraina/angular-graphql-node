import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString
} from "graphql/type/index.js";
import UserType from "./graphQLSchema.js";
import UsersModel from "./models/users.js";

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addUser: {
            type: UserType,
            description: 'Add a new User',
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString)
                },
                age: {
                    type: new GraphQLNonNull(GraphQLInt)
                },
                email: {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve: async (root, args) => {
                const newUser = new UsersModel({
                    name: args.name,
                    age: args.age,
                    email: args.email
                });
                const newUserData = await newUser.save();
                return newUserData
            }
        },
        deleteUser: {
            type: UserType,
            description: 'Deleting a user',
            args: {
                _id:  {
                    type: new GraphQLNonNull(GraphQLString)
                }
            },
            resolve : async (root, args) => {
                const deletedUser = await UsersModel.findByIdAndDelete(args._id);
                return deletedUser;
            }
        },
        updateUser: {
            type: UserType,
            description: 'Updating a user',
            args: {
                _id:  {type: new GraphQLNonNull(GraphQLString)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                age: {type: new GraphQLNonNull(GraphQLInt)},
                email: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve: async (root, args) => {
                const updatedObject = {
                    name: args.name,
                    age: args.age,
                    email: args.email
                };
                const updatedData = await UsersModel.findOneAndUpdate({
                    _id: args._id,
                }, updatedObject, {upsert : true})

                return updatedData;
            }
        }

    })
})

export default RootMutationType
