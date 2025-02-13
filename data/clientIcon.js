'use client';

import dynamic from 'next/dynamic';

// Aquí importamos los íconos de forma dinámica solo en el cliente
const WorkspacePremiumIcon = dynamic(() => import('@mui/icons-material/WorkspacePremium'), { ssr: false });
const TaskAltIcon = dynamic(() => import('@mui/icons-material/TaskAlt'), { ssr: false });
const DescriptionIcon = dynamic(() => import('@mui/icons-material/Description'), { ssr: false });
const PhoneInTalkIcon = dynamic(() => import('@mui/icons-material/PhoneInTalk'), { ssr: false });

export { WorkspacePremiumIcon, TaskAltIcon, DescriptionIcon, PhoneInTalkIcon };
