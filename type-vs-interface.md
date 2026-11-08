# Type vs. Interface in TypeScript

## Introduction

TypeScript-এ `type` আর `interface` দুইটাই ব্যবহার করা হয় কোনো data বা object-এর structure নির্ধারণ করার জন্য। প্রথম দেখায় দুইটার কাজ প্রায় একই মনে হইলেও, এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। কোন জায়গায় কোনটা ব্যবহার করা ভালো, সেটা জানা থাকলে code আরও পরিষ্কার এবং maintainable রাখা যায়।

## Detailed Explanation

`interface` মূলত object-এর structure define করার জন্য ব্যবহার করা হয়। একটা interface চাইলে অন্য interface-এর property নিজের মধ্যে Extend করে নিতে পারে। এই কাজের জন্য `extends` keyword ব্যবহার করা হয়। আবার চাইলে একই নামে একাধিক interface তৈরি করলে TypeScript সেগুলোর property একসাথে merge করে ফেলে।

```typescript
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

অন্যদিকে, `type` দিয়েও object-এর structure তৈরি করা যায়। তবে এর ব্যবহার আরও বেশি flexible। যেমন union, intersection, tuple, primitive type ইত্যাদিও define করা যায়।

```typescript
type Status = "pending" | "approved" | "rejected";

type UserWithStatus = User & {
  status: Status;
};
```

`interface`-এর মতো `type`-এ Declaration Merging করা যায় না। তবে `&` ব্যবহার করে একাধিক type একসাথে combine করা যায়। দুইটার মাধ্যমেই optional এবং readonly property define করা সম্ভব।

## Conclusion

সহজভাবে বললে, object-এর structure define করা এবং পরে extend করার দরকার হলে `interface` ব্যবহার করা ভালো। আর union, tuple অথবা complex type তৈরি করার দরকার হলে `type` বেশি কাজে আসে। তবে সাধারণ object-এর ক্ষেত্রে দুইটাই ব্যবহার করা যায়।
