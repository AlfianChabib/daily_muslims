import { BASEURL } from "./variable/baseURL";

export default async function getAll() {
  try {
    const data = await fetch(BASEURL + "/surah");
    if (!data) {
      const err = new Error("Internal Server Error");
      throw err;
    }

    return await data.json();
  } catch (error) {
    return { status: 500, message: error.message || "Server Error" };
  }
}

export async function getOneSurah(id) {
  try {
    const data = await fetch(BASEURL + "/surah/" + id);
    return await data.json();
  } catch (error) {
    return {
      status: "failed",
      message: error.message || "Internal Server Error",
    };
  }
}
