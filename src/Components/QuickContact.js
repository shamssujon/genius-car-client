import React from "react";
import timetableIcon from "../Assets/icons/timetable.svg";
import callIcon from "../Assets/icons/call.svg";
import locationIcon from "../Assets/icons/location.svg";

const QuickContact = () => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid place-content-center gap-8 rounded-lg bg-black/90 p-10 md:p-20 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-4 text-center text-white md:flex-row md:text-left">
                        <img src={timetableIcon} alt="" />
                        <div>
                            <p className="mb-2">We are open monday-friday</p>
                            <h4 className="text-2xl font-bold">7:00 am - 9:00 pm</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center text-white md:flex-row md:text-left">
                        <img src={callIcon} alt="" />
                        <div>
                            <p className="mb-2">Have a question?</p>
                            <h4 className="text-2xl font-bold">+2546 251 2658</h4>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 text-center text-white md:flex-row md:text-left">
                        <img src={locationIcon} alt="" />
                        <div>
                            <p className="mb-2">Need a repair? our address</p>
                            <h4 className="text-2xl font-bold">Liza Street, New York</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuickContact;
