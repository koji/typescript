import * as ctf from 'contentful';

export const client = ctf.createClient({
    space: process.env.REACT_APP_SPACE_ID as string,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN as string,
});