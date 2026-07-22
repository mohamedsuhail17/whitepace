import Button from "../button/Button";
import arc from "/src/assets/Element-2.png"
export default function SeventhPage() {
  return (
    
    <div className="flex flex-col">
        <div className="w-full flex items-center justify-center py-12">
            <img src={arc} alt=""/>
        </div>
        <div className="text-block text-center xl:text-start">
        <h4 className="font-bold text-4xl mb-6">
          100% your data
        </h4>
        <p className="leading-[1.875rem] mb-15">
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
        </p>
        <div className="flex flex-col items-center">
            <Button className="btn-get-started">
                Read more
            </Button>
        </div>
        </div>
    </div>
  );
}