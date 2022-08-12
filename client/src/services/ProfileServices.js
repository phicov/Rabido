import Client from "./api"

export const GetProfiles = async () => {
  try {
    const res = await Client.get("/profiles")
    return res.data
  } catch (error) {
    throw error
  }
}
