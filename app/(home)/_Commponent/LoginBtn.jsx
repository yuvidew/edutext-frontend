import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Login } from "./Login"
import { SignUp } from "./SignUp"



export const LoginBtn = () => {
    return (
        <Dialog>
        <DialogTrigger>Login</DialogTrigger>
        <DialogContent className = "dark:bg-stone-900 border-none ">
            <Tabs defaultValue="account" className=" pt-4">
            <TabsList>
                <TabsTrigger value="account" className = " focus-within:bg-stone-900">Login</TabsTrigger>
                <TabsTrigger value="password">SignUp</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <Login/>
            </TabsContent>
            <TabsContent value="password">
                <SignUp/>
            </TabsContent>
            </Tabs>
        </DialogContent>
        </Dialog>
    )
}
