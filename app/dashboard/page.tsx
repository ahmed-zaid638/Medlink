// app/dashboard/page.tsx
import ProtectedRoute from "../components/routes/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-4">مرحبًا بك في لوحة التحكم</div>
    </ProtectedRoute>
  );
}
