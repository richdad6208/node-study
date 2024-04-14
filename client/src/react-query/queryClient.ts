import { QueryCache, QueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error, query) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Cool",
      });
    },
  }),
});
