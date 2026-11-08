# Understanding Any, Unknown, and Never in TypeScript

## Introduction

TypeScript-এ `any`, `unknown`, আর `never` তিনটা গুরুত্বপূর্ণ type। এদের কাজ এবং ব্যবহার একেক রকম। TypeScript-এর Type Hierarchy বুঝতে হলে এই তিনটা type সম্পর্কে পরিষ্কার ধারণা থাকা দরকার। বিশেষ করে `any` আর `unknown`-এর পার্থক্য জানা খুবই জরুরি।

## Detailed Explanation

কোনো variable-এর type `any` দিলে TypeScript ওই variable-এর উপর type checking almost off করে দেয়। যার ফলে যেকোনো ধরনের value assign করা যায়। কিন্তু এতে runtime error থেকে যায়। যা normal javascript file এও হয়।

```typescript
let value: any = "Hello";

value.toFixed(2);
value = 100;
```

অন্যদিকে, `unknown` অনেকটা `any`-এর মতো হলেও একটা গুরুত্বপূর্ণ পার্থক্য আছে। এখানে যেকোনো value assign করা যায়, কিন্তু ব্যবহার করার আগে type check করতে হয়।

```typescript
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এই কারণে `unknown` ব্যবহার করা বেশি নিরাপদ। বিশেষ করে API response বা বাইরের কোনো data নিয়ে কাজ করার সময় এটা কাজে আসে।

এবার আসি `never`-এ। কোনো function যদি কখনো স্বাভাবিকভাবে return না করে, তাহলে তার return type `never` হতে পারে। যেমন function সবসময় Error throw করলে।

```typescript
const throwError = (message: string): never => {
  throw new Error(message);
};
```

Type hierarchy অনুযায়ী, `unknown` হলো top type এবং `never` হলো bottom type। `unknown` যেকোনো value গ্রহণ করতে পারে, আর `never` কোনো value ধারণ করতে পারে না। `any` এই type system-এর স্বাভাবিক safety rules এড়িয়ে যায়।

## Conclusion

সহজভাবে বললে, `any` type checking এড়িয়ে যায়, `unknown` value ব্যবহারের আগে checking করতে বাধ্য করে, আর `never` এমন value বোঝায় যা কখনো তৈরি হয় না। তাই type সম্পর্কে নিশ্চিত না থাকলে `any`-এর পরিবর্তে `unknown` ব্যবহার করাই ভালো। এতে code আরও safe এবং maintainable থাকে।
