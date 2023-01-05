import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl'>Question: 1</h1>
                <h2 className='text-3xl'>What is the perpose of React Router ? <br /> রিয়াক্ট রাউটার কি কাজে লাগে বা ব্যবহার হয় ?</h2>
                <h1 className='text-3xl'>Answer: 1</h1>
                <p className='text-2xl bg-slate-300 mb-20'>যখন আমরা একটা  সিঙ্গেল পেজ এপ্লিকেশন বানাই,
                    তখন আমাদের একটা জিনিস মাথায় রেখে পেজ টা বানাতে হয়।
                    আর সেটা হলো পেজ যেন রিফ্রেশ না হয়।
                    সিঙ্গেল পেজ এপ্লিকেশন এর জন্য এবং একটা জাগা থেকে অন্য জাগায় যাওয়ার জন্য আমাদের মাঝে মাঝে এ ট্যাগ ব্যবহার করতে হয়,
                    আর আমরা যদি এ ট্যাগ ব্যবহার করি তাহলে আমাদের পেজ টি একটা রিলোড নেয়।
                    আর রিলোড নিলে সেটা কিন্তু সিঙ্গেল পেজ এপ্লিকেশন হইলো না।
                    মূল কথা হলো আমাদের এক জাগা থেকে অন্য জাগায় যাওয়ার জন্য বিশেষ করে সিঙ্গেল পেজ এপ্লিকেশন এ যেন পেজটা রিলোড না হয় এর জন্য আমাদের রিএক্ট রাউটার ব্যবহার করতে হয়।
                    একজাগা থেকে অন্য জাগায় ডাইনামিক ভাবে যাওয়ার জন্য আমাদের রিএক্ট রাউটার টি লাগবে।  </p>
                <h1 className='text-4xl'>Question: 2</h1>
                <h2 className='text-3xl' >How does context api works ?  <br />কনটেক্সট এ.পি আই কিভাবে কাজ করে ?</h2>
                <h1 className='text-3xl'>Answer: 2</h1>
                <p className='text-2xl bg-slate-300 mb-20'>কনটেক্সট এ.পি আই আমাদের কাজ অনেক কমিয়ে এনে দিছে।
                    যদি আমাদের একটা ডাটা একটা কম্পোনেন্ট থেকে অন্য কোনো কম্পোনেন্ট বা ৫-৭ লেভেল পরে যায় আমাদের একটা ডাটা লাগবে যেটা আমাদের ১ নম্বর কম্পোনেন্ট থেকে পাঠাইতে হবে।
                    আর আমরা যদি ৭ নম্বর কম্পোনেন্ট থেকে ডাটা টা রেসিয়েভ করতে যাই তাহলে আমাদের মাঝের কম্পোনেন্টগুলা শুধু ডাটা পাস করে যাবে কিন্তু তারা ব্যবহার করতেছে না।
                    আর আমাদের এগুলা করতে করতে মানে ১  থেকে ২, আবার ২ থেকে ৩ এভাবে এভাবে করে ৭ নম্বর প্রযন্ত ডাটা পাঠাইতে আমাদের অনেক সময়ও লেগে যাইতেছে।
                    এই সময় বাঁচানোর জন্য আমরা ১ নম্বর কম্পোনেন্ট থেকে একটা কনটেক্সট এ.পি.আইই পাঠাই দিবো।
                    আর আমার যেখানে দরকার মানে ৭ নম্বর কম্পোনেন্ট থেকে সেটা রেসিয়েভে করে ব্যবহার করবো।
                    এতে আমাদের সময়ও বেঁচে যাইতেছে আবার কোডও কম লিখতে হইতেছে।   </p>
                <h1 className='text-4xl'>Question: 3</h1>
                <h2 className='text-3xl'>what is useRef ? and how does work ? <br /> useRef কি এবং কিভাবে কাজ করে </h2>
                <h1 className='text-3xl'>Answer: 3</h1>
                <p className='text-2xl bg-slate-300 mb-20'>এটা জানা নাই আমার।
                    ইউটুবে দেখে জানতে হবে এর পরে ভালো করে লিখে দিবো।
                    কিন্তু এই মুহূর্তে আমার জানা নাই। </p>
            </div>
        </div>
    );
};

export default Blog;