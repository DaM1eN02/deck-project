import * as React from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.string}</div>;
}