import React from 'react'
import { Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
import qmarkIcon from '../assets/qmark.svg'
import boxesIcon from '../assets/boxes.svg'

function ProfileTabs() {
    return (
        <div className='bg-[#363C43] ps-8 pe-3 py-4 relative rounded-xl shadow-box '>
            <img src={qmarkIcon} alt="question-mark-icon" className='absolute top-4 left-3' />
            <img src={boxesIcon} alt="box-icon" className='absolute left-3 top-1/2' />
            <div className='mx-1'>
                <Tabs variant='unstyled'>
                    <TabList className='bg-[#171717] mx-4 p-1 rounded-2xl w-[92%] font-medium grid-cols-3 gap-2 tabs-div'>
                        <Tab className='text-[#A3ADB2] rounded-2xl px-7 tabs tab-1 relative z-10' _selected={{ color: 'white', bg: '#28292F', borderRadius: '16px', boxShadow: '14px 16px 67px 8px #0A0A0A, -8px -16px 50px -16px #485B71' }}>About Me</Tab>
                        <Tab className='text-[#A3ADB2] rounded-2xl px-7 tabs tab-2 relative z-10' _selected={{ color: 'white', bg: '#28292F', borderRadius: '16px', boxShadow: '14px 16px 67px 8px #0A0A0A, -8px -16px 50px -16px #485B71' }}>Experiences</Tab>
                        <Tab className='text-[#A3ADB2] rounded-2xl px-7 tabs tab-3 relative z-10' _selected={{ color: 'white', bg: '#28292F', borderRadius: '16px', boxShadow: '14px 16px 67px 8px #0A0A0A, -8px -16px 50px -16px #485B71' }}>Recommended  </Tab>
                    </TabList>
                    <TabPanels className='text-[#969696] mt-6 mb-4 h-32 overflow-auto tab-content pe-6'>
                        <TabPanel>
                            <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p><br />
                                 <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id alias iure tenetur placeat quam! Exercitationem aperiam vel iure magni molestiae sequi eaque nobis, similique sint temporibus voluptates harum vero rerum eligendi mollitia maxime quo, voluptatum quae impedit architecto officiis consequatur tenetur! Molestias, aut! Quisquam qui deleniti praesentium cum, maiores aspernatur?</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia ipsam eos error voluptatum optio perferendis quas labore inventore doloremque sint accusantium consectetur, sit illum et dignissimos id doloribus velit alias! Eaque ducimus quae, odio soluta veniam repudiandae tenetur commodi aperiam praesentium accusamus aut placeat ipsum officia delectus, minus, a totam tempora temporibus. Hic quas obcaecati cupiditate, tempore saepe veritatis, id unde quidem neque eaque libero! Voluptatum ab magni reprehenderit a nesciunt sint quibusdam, ducimus saepe, dolores cum ipsa quae soluta?</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor expedita iste quod in, architecto iure minus sit magni qui nisi omnis animi illum quos obcaecati ipsa asperiores, sed nesciunt veniam. Voluptatum ab quam deserunt excepturi hic repellat iure nesciunt quod maiores placeat, ad consequuntur, nihil in doloremque pariatur earum assumenda officiis voluptates saepe autem. Odio, necessitatibus repudiandae doloremque, mollitia reprehenderit beatae odit natus unde amet aliquam recusandae explicabo aspernatur? Blanditiis aspernatur, minus eum distinctio omnis dolore sed fugit alias.</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
        </div>
    )
}

export default ProfileTabs
