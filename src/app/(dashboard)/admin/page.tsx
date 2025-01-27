import Announcements from "@/app/components/Announcements";
import AttendanceChartContainer from "@/app/components/AttendanceChartContainer";
import CountChartContainer from "@/app/components/CountChartContainer";
import EventCalendarContainer from "@/app/components/EventCalendarContainer";
import FinanceChart from "@/app/components/FinanceChart";
import UserCard from "@/app/components/UserCard";
import React from "react";

export default function AdminPage({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>

          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer searchParams={searchParams} />
        <Announcements />
      </div>
    </div>
  );
}
