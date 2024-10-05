"use server";

import OpenAi from "openai";

const openAi = new OpenAi({ apiKey: process.env.OPEN_AI_KEY });
export async function transcibedUploadFile(
  resp: {
    serverData: { userId: string; file: any };
  }[]
) {
  if (!resp) {
    return { success: false, message: "File upload faild", data: null };
  }

  const {
    serverData: {
      userId,
      file: { url: fileUrl, name: fileName },
    },
  } = resp[0];

  if (!fileUrl || !fileName) {
    return { success: false, message: "File upload faild", data: null };
  }

  try {
    const file = await fetch(fileUrl);
    const transcriptions = await openAi.audio.transcriptions.create({
      model: "whisper-1",
      file,
    });

    return {
      success: true,
      message: "File upload succesfully",
      data: transcriptions,
    };
  } catch (error) {
    console.log(">>>errir>>>", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error proccesing faild",
      data: null,
    };
  }
}
