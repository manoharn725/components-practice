import {
  GrApple,
  GrGoogle,
  GrLinkedin,
  GrOnedrive,
  GrOpera,
} from "react-icons/gr";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Hello");
  };

  return (
    <div className="p-3 flex flex-wrap justify-start">
      <div>
        <Button  primary onClick={handleClick}>
          <GrApple className="mr-1" />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary onMouseOver={handleClick}>
          <GrGoogle className="mr-1" />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GrLinkedin className="mr-1" />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GrOnedrive className="mr-1" />
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <GrOpera className="mr-1" />
          Danger
        </Button>
      </div>
      <div>
        <Button outline>Outline</Button>
      </div>
      <div>
        <Button rounded>Rounded</Button>
      </div>
      <div>
        <Button primary rounded>
          PrimaryRounded
        </Button>
      </div>
      <div>
        <Button secondary rounded >
          SecondaryRounded
        </Button>
      </div>
      <div>
        <Button success rounded>
          SuccessRounded
        </Button>
      </div>
      <div>
        <Button warning rounded>
          WarningRounded
        </Button>
      </div>
      <div>
        <Button danger rounded>
          DangerRounded
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
