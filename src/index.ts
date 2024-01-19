import { User } from "./models/User";

const user = new User({ id: 1 });
// user.fetch();

user.set({ name: "Lou", age: 3355 });
user.save();

// console.log(user.get("name"));
// console.log(user.get("age"));

// user.on("change", () => {
//  console.log("adadaf");
// });

// user.trigger("change");
