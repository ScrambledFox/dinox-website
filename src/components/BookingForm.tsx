import TextButton from "@/components/buttons/TextButton";

interface BookingFormProps {
  className?: string;
}

export default function BookingForm({ className }: BookingFormProps) {

  return (
    <form className='flex flex-col space-y-4 mt-4' action={"https://submit-form.com/Zwt4r99h5"}>
      <input type="text" id="name" name="name" className='bg-transparent p-2 border-b border-0' required placeholder='Full Name*' />
      <input type="email" id="email" name="email" className='bg-transparent p-2 border-b border-0' required placeholder='Email*' />
      <input type="text" id="phone" name="phone" className='bg-transparent p-2 border-b border-0' required placeholder='Phone*' />
      <input type="text" id="date" name="date" className='bg-transparent p-2 border-b border-0' placeholder='Event Date' />
      <input type="text" id="eventName" name="eventName" className='bg-transparent p-2 border-b border-0' placeholder='Event Name' />
      <textarea id="extraInfo" name="extraInfo" className='bg-transparent p-2 border-b border-0 min-h-16 h-32 max-h-64' placeholder='Extra information about the event' />

      <TextButton type="submit" className="text-black bg-white p-4 rounded-lg">Request Booking</TextButton>
    </form>
  )

}