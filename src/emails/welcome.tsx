import {
    Body,
    Button,
    Container,
    Font,
    Head,
    Html
} from "@react-email/components";

type WelcomeProps = {
    firstName: string;
}

export default function Welcome({ firstName }: WelcomeProps) {
  return (
    <Html>
      <Head />
      <Body>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={800}
          fontStyle="normal"
        />
        <Container>
            <h1>Welcome {firstName}!</h1>
          <Button
            href="https://www.votonic.com/"
            style={{ background: "#000", padding: "10px 20px", color: "#fff", borderRadius: "5px" }}
          >
            Hello
          </Button>
        </Container>
      </Body>
    </Html>
  );
}
