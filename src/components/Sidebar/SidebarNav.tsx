import React from "react";
import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-star">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine} name="Dashboard" />
        <NavLink href="/users" icon={RiContactsLine} name="Usuários" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine} name="Formulários" />
        <NavLink href="/automation" icon={RiGitMergeLine} name="Automação" />
      </NavSection>
    </Stack>
  );
}
