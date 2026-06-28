import { DataTable } from "@/components/tables";
import { Badge, Button, SectionHeader } from "@/components/ui";
import { members } from "@/lib/mock-data";

const roleVariant = {
  ADMIN: "blue",
  ANALYST: "indigo",
  VIEWER: "slate"
} as const;

export default function MembersPage() {
  const rows = members.map((member) => [
    <div key={`${member.email}-identity`}>
      <p className="font-medium text-slate-900">{member.name}</p>
      <p className="mt-1 text-xs text-slate-500">{member.email}</p>
    </div>,
    <Badge
      key={`${member.email}-role`}
      variant={roleVariant[member.role]}
      className="w-fit"
    >
      {member.role}
    </Badge>,
    <span key={`${member.email}-scope`} className="text-sm text-slate-600">
      Northstar Labs workspace
    </span>
  ]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Workspace Access"
        title="Manage members and roles"
        description="Invite teammates into the workspace and maintain role-based access for Admin, Analyst, and Viewer users."
        action={<Button>Add member</Button>}
      />

      <DataTable
        columns={[
          { key: "member", label: "Member" },
          { key: "role", label: "Role" },
          { key: "scope", label: "Workspace Scope" }
        ]}
        rows={rows}
      />
    </div>
  );
}
