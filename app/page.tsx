'use client';
import { Card, Text, Subtitle, Divider } from '@tremor/react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#394F68] to [#183b73]">
      <Card>
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>

        <Divider className="my-10" />
        <Card className="bg-gradient-to-br from-[#394F68] to [#183b73]">
          {/* CityPicker  */}
        </Card>
      </Card>
    </div>
  );
}
