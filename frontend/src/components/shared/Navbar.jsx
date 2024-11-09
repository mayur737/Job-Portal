import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { User2, LogOut } from "lucide-react";
const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-500">Portal</span>
          </h1>
        </div>
        <div>
          <ul className="flex font-medium items-center gap-12">
            <li>Home</li>
            <li>Jobs</li>
            <li>Applications</li>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="flex gap-4 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Mayur Bobde</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div classname="flex flex-col col text-grey-600">
                    <User2 />
                    <Button
                      variant="link"
                      className="flex w-ft items-center gap-2 cursor-pointer"
                    >
                      View Profile
                    </Button>
                  </div>
                  <div classname="flex flex-col gap-3 text-grey-600">
                    <LogOut />
                    <Button
                      variant="link"
                      className="flex w-ft items-center gap-2 cursor-pointer"
                    >
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
