import React from "react";
import MenuLink from "../components/MenuLink";
import RootContainer from "../components/RootContainer";
import {IUsersManagementPageProps} from "../interfaces/IUsersManagementPageProps";
import {IUser} from "../interfaces/IUser";
import {NextPage} from "next";

const Users: NextPage = ({users}:IUsersManagementPageProps) => {
    return (
        <RootContainer keywords={'users'} title={'Users'}>

            <ul className="list-disc list-inside">
                {users.map(user =>
                    <li key={user.id}>
                        <MenuLink href={`/users/${user.id}`}>
                            {user.name}
                        </MenuLink>
                    </li>
                )}
            </ul>
        </RootContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: IUser[] = await response.json();

    return {
        props: {users}
    }

}