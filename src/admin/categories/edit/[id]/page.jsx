"use client";

import Sidebar from "../../../dashboard/components/Sidebar";
import CategoryForm from "../../components/CategoryForm";

export default function EditCategoryPage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <main className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Edit Category</h1>
            <p className="text-gray-600 mt-1">Update article category</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <CategoryForm categoryId={params.id} />
          </div>
        </main>
      </div>
    </div>
  );
}
