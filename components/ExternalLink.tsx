import React from "react";
import { Link, type Href } from "expo-router"; // Import the correct Href type
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: Href<string | object>; // Use the correct Href type
};

export function ExternalLink({ href, ...rest }: Props) {
  const handlePress = async (event: any) => {
    if (Platform.OS !== "web") {
      // Prevent the default behavior of linking to the default browser on native.
      event.preventDefault();
      // Open the link in an in-app browser.
      await openBrowserAsync(href.toString());
    }
  };

  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={handlePress} // Use handlePress function for event
    />
  );
}
