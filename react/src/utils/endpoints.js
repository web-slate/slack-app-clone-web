function getBasePath() {
  return 'https://slackclone001.herokuapp.com'
}

const ORGANIZATION_ID = '1ae5241e-a51b-11ec-b909-0242ac120002'
const CHANNEL_ID = '4f0300c2-a51b-11ec-b909-0242ac120002'

export const USERS_LIST = `${getBasePath()}/users`

export const CHANNEL_LIST = `${getBasePath()}/channel`

export const MESSAGES_LIST = `${getBasePath()}/messages`

export const ORGANIZATION_BY_ID = `${getBasePath()}/organization/${ORGANIZATION_ID}`

export const CREATE_CHANNEL = `${getBasePath()}/channel`

export const ADD_USERS = `${getBasePath()}/addusers`
