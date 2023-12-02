import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  male = "male",
  female = "female",
  others = "others",
}

type EnrollmentInfo = {
  firstname: string;
  lastname: string;
  dob: string;
  gender: GenderEnum;
  email: string;
  phoneNumber: string;
};

const EnrollForm = () => {
  const { register, handleSubmit } = useForm<EnrollmentInfo>();
  const onSubmit: SubmitHandler<EnrollmentInfo> = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstname")} type="text"/>

      <label>Last Name</label>
      <input {...register("lastname")} type="text"/>

      <label>dob</label>
      <input {...register("dob")} type="date"/>

      <label>Email</label>
      <input {...register("email")} type="text"/>

      <label>Phone Number</label>
      <input {...register("phoneNumber")} type="text"/>

      <select {...register("gender")}>
        <option value={"female"}>female</option>
        <option value={"male"}>male</option>
        <option value={"others"}>others</option>
      </select>

      <input type="submit"/>
    </form>
  );
};

export default EnrollForm;
