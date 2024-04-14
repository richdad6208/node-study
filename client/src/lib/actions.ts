"use server";

export async function createUser(formData: FormData) {
  const rawFormData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  console.log(rawFormData);
  return rawFormData;
}
