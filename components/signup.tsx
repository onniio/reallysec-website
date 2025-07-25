"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { IconBrandGithub } from "@tabler/icons-react";
import Password from "./password";
import { Button } from "./button";
import { Logo } from "./Logo";
import { Globe } from "./globe";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter password",
    })
    .min(1, "Please enter your name"),
  email: z
    .string({
      required_error: "Please enter email",
    })
    .email("Please enter valid email")
    .min(1, "Please enter email"),
  password: z
    .string({
      required_error: "Please enter password",
    })
    .min(1, "Please enter password"),
});

export type LoginUser = z.infer<typeof formSchema>;

export function SignupForm() {
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginUser) {
    try {
      console.log("submitted form", values);
    } catch (e) {}
  }

  return (
    <div className="min-h-screen flex">
      {/* 左侧 - 注册表单 */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <Form {...form}>
          <div className="mx-auto w-full max-w-md">
            <div>
              <div className="flex">
                <Logo />
              </div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
                注册成为Reallysec合作伙伴
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                          >
                            Full name
                          </label>
                          <FormControl>
                            <div className="mt-2">
                              <input
                                id="name"
                                type="name"
                                placeholder="Carr Xia"
                                className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                          >
                            Email address
                          </label>
                          <FormControl>
                            <div className="mt-2">
                              <input
                                id="email"
                                type="email"
                                placeholder="hello@reallysec.com"
                                className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                          >
                            Password
                          </label>
                          <FormControl>
                            <div className="mt-2">
                              <Password
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-aceternity text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <Button className="w-full">Sign Up</Button>
                    <p
                      className={cn(
                        "text-sm text-neutral-500 text-center mt-4 text-muted dark:text-muted-dark"
                      )}
                    >
                      已拥有Reallysec账户?{" "}
                      <Link href="/login" className="text-black dark:text-white">
                        登入
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-neutral-300 dark:border-neutral-700" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-neutral-400 dark:text-neutral-500 dark:bg-black">
                      或者选择
                    </span>
                  </div>
                </div>

                <div className="mt-6 w-full flex items-center justify-center">
                  <Button 
                  onClick={() => window.open('https://www.blackhat.com/', '_blank')} 
                  className="w-full py-1.5">
                    <span className="text-sm font-semibold leading-6">
                      Blackhat ID
                    </span>
                  </Button>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center mt-8">
                  By clicking on sign up, you agree to our{" "}
                  <Link
                    href="#"
                    className="text-neutral-500 dark:text-neutral-300"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="#"
                    className="text-neutral-500 dark:text-neutral-300"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      </div>

      {/* 右侧 - 地球仪组件 */}
      <div className="hidden lg:flex flex-1 flex-col items-center justify-center bg-white dark:bg-black relative overflow-hidden px-8 py-12">
        {/* 标题文字 - 移到地球仪上方 */}
        <div className="text-center mb-8 z-10">
        </div>
        
        {/* 地球仪 */}
        <div className="flex-1 flex items-center justify-center">
          <Globe className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}