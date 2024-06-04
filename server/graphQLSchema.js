import {GraphQLInt, GraphQLNonNull, GraphQLObjectType,
    GraphQLString} from "graphql/type/index.js";

const UserType = new GraphQLObjectType({
    name: "Users",
    description: 'This is User Data',
    fields: () => ({
        _id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)},
        email: {type: new GraphQLNonNull(GraphQLString)},
    })
});

export default UserType;