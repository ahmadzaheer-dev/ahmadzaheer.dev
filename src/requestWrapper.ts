import { NextRequest } from "next/server";
import { ZodError, AlreadyExistsError } from "@/errors";

const requestWrapper = (
  handler: (requst: NextRequest) => Promise<Response | undefined>
) => {
  async function wrapper(request: NextRequest) {
    try {
      return await handler(request);
    } catch (err) {
      if (err instanceof ZodError) {
        const errorObject = JSON.parse((err as Error).message);
        return Response.json({ error: errorObject }, { status: 400 });
      }
      if (err instanceof AlreadyExistsError) {
        return Response.json({ error: err.message }, { status: 403 });
      }

      throw err;
    }
  }

  return wrapper;
};

export default requestWrapper;
