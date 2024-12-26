import {
  Body,
  Container,
  Head,
  Hr,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Button,
  Html,
  Font,
} from "@react-email/components";
import * as React from "react";
import { Logo } from "@components/common";

export default function Welcome() {
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
