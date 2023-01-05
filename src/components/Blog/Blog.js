import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1>Question: 1</h1>
                <h2>What is the perpose of React Router ? <br /> রিয়াক্ট রাউটার কি কাজে লাগে বা ব্যবহার হয় ?</h2>
                <h1>Answer: 1</h1>
                <p>যখন আমরা একটা  সিঙ্গেল পেজ এপ্লিকেশন বানাই,
                    তখন আমাদের একটা জিনিস মাথায় রেখে পেজ টা বানাতে হয়।
                    আর সেটা হলো পেজ যেন রিফ্রেশ না হয়।
                    সিঙ্গেল পেজ এপ্লিকেশন এর জন্য এবং একটা জাগা থেকে অন্য জাগায় যাওয়ার জন্য আমাদের মাঝে মাঝে এ ট্যাগ ব্যবহার করতে হয়,
                    আর আমরা যদি এ ট্যাগ ব্যবহার করি তাহলে আমাদের পেজ টি একটা রিলোড নেয়।
                    আর রিলোড নিলে সেটা কিন্তু সিঙ্গেল পেজ এপ্লিকেশন হইলো না।
                    মূল কথা হলো আমাদের এক জাগা থেকে অন্য জাগায় যাওয়ার জন্য বিশেষ করে সিঙ্গেল পেজ এপ্লিকেশন এ যেন পেজটা রিলোড না হয় এর জন্য আমাদের রিএক্ট রাউটার ব্যবহার করতে হয়।
                    একজাগা থেকে অন্য জাগায় ডাইনামিক ভাবে যাওয়ার জন্য আমাদের রিএক্ট রাউটার টি লাগবে।  </p>
               
            </div>
        </div>
    );
};

export default Blog;