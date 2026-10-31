// =============================================================
//  SITE CONTENT — edit this file to update the website.
//  Every text has an English (en) and Arabic (ar) version.
//  Items written in [square brackets] are placeholders that
//  still need your real information.
// =============================================================

// Contact details and files (same in both languages)
export const contact = {
  email: 'engahdnhmani@gmail.com',
  // WhatsApp number in international format, digits only for the link
  whatsappDisplay: '+966 53 290 4070',
  whatsappNumber: '966532904070',
  // Replace with your LinkedIn profile URL, e.g. https://www.linkedin.com/in/your-name
  linkedin: 'https://www.linkedin.com/in/ahmad-ali-8b9111278',
};

// CV download. Put your PDF at: public/cv/Ahmed-Ali-CV.pdf
// then change cvAvailable to true.
export const cv = {
  file: 'cv/Ahmed-Ali-CV.pdf',
  available: true,
};

// Profile photo (hero) and work photo (About section), stored in public/images/.
// Set either to null to show a placeholder instead.
export const photo = 'images/profile.jpg';
export const workPhoto = 'images/at-work.jpg';

export const yearsOfExperience = '8+';

export const content = {
  en: {
    meta: {
      langLabel: 'العربية',
      langSwitchAria: 'Switch to Arabic',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      expertise: 'Expertise',
      skills: 'Skills',
      projects: 'Projects',
      controls: 'Project Controls',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      name: 'Ahmed Ali',
      titles: ['Civil Engineer', 'Planning Engineer', 'Cost Control', 'Technical Office', 'Project Management'],
      statement: 'I keep construction projects on schedule and on budget, from the first baseline to the final payment certificate.',
      intro:
        'Civil engineer with over 8 years across project management, planning and scheduling, technical office, quantity surveying and cost control, based in Saudi Arabia.',
      downloadCv: 'Download CV',
      contactMe: 'Contact Me',
      photoPlaceholder: 'Profile photo',
      location: 'Saudi Arabia',
    },
    about: {
      eyebrow: 'About Me',
      title: 'Engineering judgement backed by project data',
      summary: [
        'Civil Engineer with over 8 years of experience across construction project management, planning and scheduling, structural engineering, site execution, technical office operations, quantity surveying, and cost control.',
        'Experienced in managing construction activities, preparing and updating project schedules, monitoring project performance, coordinating procurement plans, managing subcontractor payments, preparing claims and variation orders, and supporting project cost management.',
        'Currently involved in a residential towers development project, handling multidisciplinary technical and project controls responsibilities.',
      ],
      yearsLabel: 'Years of experience',
      workPhotoAlt: 'Ahmed Ali in the technical office with a Primavera P6 schedule on screen',
      strengthsTitle: 'Core strengths',
      strengths: [
        'Planning & scheduling',
        'Cost control & cash flow',
        'Technical office & shop drawings',
        'Quantity surveying & BOQ',
        'Claims & variation orders',
        'Site execution & team leadership',
      ],
    },
    experience: {
      eyebrow: 'Professional Experience',
      title: 'Career timeline',
      hint: 'Select a role to see the responsibilities.',
      present: 'Present',
      companyPlaceholder: '[Company name]',
      items: [
        {
          id: 'current',
          role: 'Planning & Cost Engineer',
          company: 'LEVELs',
          dates: 'November 2024 – Present',
          context: 'Residential towers development project, Jeddah',
          current: true,
          points: [
            'Handling multidisciplinary technical office and project controls responsibilities.',
            'Scheduling, cost control, quantity takeoff, payment certificates and claims (see Current Responsibilities below).',
          ],
        },
        {
          id: 'pm',
          role: 'Project Manager',
          company: 'Asaico Emtyas Contracting (subcontractor to SAJCO)',
          dates: 'November 2022 – May 2024',
          context: 'NEOM International Airport',
          points: [
            'Managed earthworks and infrastructure activities for NEOM International Airport.',
            'Coordinated more than 90 heavy equipment units and approximately 120 employees.',
            'Managed project execution, planning, cost control, quantity surveying, and site operations.',
            'Monitored project progress, resources, and contractual requirements.',
          ],
        },
        {
          id: 'site',
          role: 'Site Manager',
          company: 'Yemeni Economic Corporation',
          dates: 'April 2020 – July 2021',
          context: 'Building construction',
          points: [
            'Supervised construction activities, including structural, architectural, and MEP works.',
            'Managed procurement, BOQ, project schedules, and site execution.',
            'Coordinated subcontractors and technical teams.',
          ],
        },
        {
          id: 'civil',
          role: 'Civil Engineer',
          company: 'Yemeni Economic Corporation',
          dates: 'February 2019 – January 2020',
          context: 'Commercial, residential and social buildings',
          points: [
            'Worked on commercial, residential, and social building projects.',
            'Participated in project reporting, execution monitoring, and quantity management.',
            'Projects with a combined estimated value of approximately USD 2 million.',
          ],
        },
        {
          id: 'structural',
          role: 'Structural Engineer',
          dates: 'October 2015 – November 2016',
          context: "Green City – Aden · Rawabi Sana'a City",
          points: [
            'Participated in structural engineering projects.',
            "Worked on Green City – Aden and Rawabi Sana'a City projects.",
          ],
        },
      ],
    },
    responsibilities: {
      eyebrow: 'Current Responsibilities',
      title: 'What I handle on a live project today',
      groups: [
        {
          icon: 'bi-rulers',
          title: 'Technical office',
          items: [
            'Preparation and coordination of architectural and structural shop drawings.',
            'Preparation and management of multidisciplinary Shop Drawing Logs.',
          ],
        },
        {
          icon: 'bi-calculator',
          title: 'Quantities & payments',
          items: [
            'Quantity takeoff for architectural, structural, and selected MEP works.',
            'BOQ preparation and quantity verification.',
            'Preparation and review of subcontractor interim payment certificates.',
            'Claims and Variation Orders (VO) documentation.',
          ],
        },
        {
          icon: 'bi-calendar3-range',
          title: 'Planning & reporting',
          items: [
            'Preparation, updating, and monitoring of project schedules.',
            'Weekly and monthly project progress reporting.',
            'Procurement planning and coordination.',
          ],
        },
        {
          icon: 'bi-cash-coin',
          title: 'Cost & cash flow',
          items: [
            'Project cash flow preparation and monitoring.',
            'Project cost control and financial performance monitoring.',
          ],
        },
      ],
    },
    expertise: {
      eyebrow: 'Core Expertise',
      title: 'Six disciplines, one project view',
      items: [
        { icon: 'bi-diagram-3', title: 'Project Planning', text: 'Baselines, schedule updates, critical path and look-ahead plans that the site can actually follow.' },
        { icon: 'bi-graph-down-arrow', title: 'Cost Control', text: 'Budget tracking, cash flow, forecasting and performance indices to protect project margins.' },
        { icon: 'bi-folder2-open', title: 'Technical Office', text: 'Shop drawings, drawing logs and coordination between design, consultant and site.' },
        { icon: 'bi-briefcase', title: 'Project Management', text: 'Leading execution, resources, subcontractors and contractual requirements end to end.' },
        { icon: 'bi-clipboard-data', title: 'Quantity Surveying', text: 'Takeoffs, BOQ preparation, quantity verification and interim payment certificates.' },
        { icon: 'bi-truck', title: 'Procurement Management', text: 'Procurement plans aligned with the schedule so materials arrive when work needs them.' },
      ],
    },
    skills: {
      eyebrow: 'Technical Skills',
      title: 'Software and engineering competencies',
      note: 'Dots show which work areas each skill supports.',
      areas: { plan: 'Planning', cost: 'Cost', design: 'Drawings', report: 'Reporting' },
      groups: [
        {
          title: 'Software',
          items: [
            { icon: 'bi-calendar-week', name: 'Primavera P6', desc: 'Project planning & scheduling', areas: ['plan', 'report'] },
            { icon: 'bi-file-earmark-spreadsheet', name: 'Microsoft Excel', desc: 'Advanced construction reporting & cost control', areas: ['cost', 'report', 'plan'] },
            { icon: 'bi-bar-chart-line', name: 'Microsoft Power BI', desc: 'Dashboards & project performance analysis', areas: ['report', 'cost'] },
            { icon: 'bi-vector-pen', name: 'AutoCAD', desc: 'Technical drawings & shop drawings', areas: ['design'] },
            { icon: 'bi-boxes', name: 'Autodesk Revit', desc: 'BIM coordination', areas: ['design'] },
            { icon: 'bi-signpost-split', name: 'Civil 3D', desc: 'Civil and infrastructure design', areas: ['design'] },
          ],
        },
        {
          title: 'Engineering & controls',
          items: [
            { icon: 'bi-list-check', name: 'Quantity Surveying & BOQ', desc: 'Takeoffs, BOQ and verification', areas: ['cost'] },
            { icon: 'bi-speedometer2', name: 'EVM', desc: 'Earned Value Management', areas: ['cost', 'plan', 'report'] },
            { icon: 'bi-activity', name: 'S-Curve, SPI, CPI', desc: 'Cash flow & forecasting', areas: ['cost', 'plan', 'report'] },
            { icon: 'bi-box-seam', name: 'Procurement Planning', desc: 'Schedule-driven procurement', areas: ['plan'] },
            { icon: 'bi-file-earmark-text', name: 'Claims & Variation Orders', desc: 'Entitlement and documentation', areas: ['cost', 'report'] },
            { icon: 'bi-shield-check', name: 'Cost Control & Monitoring', desc: 'Budget vs actual and forecasts', areas: ['cost', 'report'] },
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'Featured Projects',
      title: 'Projects I have contributed to',
      roleLabel: 'My role',
      imagePlaceholder: 'Project image',
      gallery: 'View renders',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
      items: [
        {
          id: 'towers',
          name: 'Residential Towers Projects',
          location: 'Saudi Arabia',
          role: 'Technical office & project controls',
          text: 'Multi-tower residential development: shop drawings, quantities, payment certificates, schedules and cost control.',
          images: ['images/projects/towers-1.jpg', 'images/projects/towers-2.jpg', 'images/projects/towers-3.jpg', 'images/projects/towers-4.jpg', 'images/projects/towers-5.jpg'],
        },
        {
          id: 'neom',
          name: 'NEOM International Airport',
          location: 'NEOM, Saudi Arabia',
          role: 'Project Manager · Earthworks & infrastructure',
          text: 'Earthworks and infrastructure activities, coordinating more than 90 heavy equipment units and about 120 employees.',
          images: [],
        },
        {
          id: 'green',
          name: 'Green City – Aden',
          location: 'Aden, Yemen',
          role: 'Structural Engineer',
          text: 'Participation in structural engineering works.',
          images: [],
        },
        {
          id: 'rawabi',
          name: "Rawabi Sana'a City",
          location: "Sana'a, Yemen",
          role: 'Structural Engineer',
          text: 'Participation in structural engineering works.',
          images: [],
        },
      ],
    },
    controls: {
      eyebrow: 'Project Controls',
      title: 'How I keep a project measurable',
      text: 'Every report I prepare connects time, cost and procurement, so management sees one consistent picture of where the project stands.',
      chartCaption: 'Illustrative S-curve: planned vs actual progress. Not data from any project.',
      planned: 'Planned',
      actual: 'Actual',
      dataDate: 'Data date',
      items: [
        { icon: 'bi-calendar-week', title: 'Primavera P6', text: 'Building and maintaining the project schedule.' },
        { icon: 'bi-layers', title: 'Baseline & updated schedules', text: 'Approved baselines, periodic updates and variance tracking.' },
        { icon: 'bi-speedometer2', title: 'EVM & performance monitoring', text: 'Earned value, SPI and CPI to measure progress honestly.' },
        { icon: 'bi-graph-up-arrow', title: 'Cost forecasting', text: 'Estimate at completion and cost trends.' },
        { icon: 'bi-box-seam', title: 'Procurement tracking', text: 'Long-lead items and deliveries tied to activities.' },
        { icon: 'bi-cash-stack', title: 'Cash flow', text: 'Planned vs actual cash in and out.' },
        { icon: 'bi-activity', title: 'S-curve reporting', text: 'Cumulative progress curves for weekly and monthly reports.' },
      ],
    },
    cv: {
      eyebrow: 'Curriculum Vitae',
      title: 'Download my full CV',
      text: 'A complete record of my roles, projects, education and training in PDF format.',
      button: 'Download CV (PDF)',
      missingTitle: 'CV file not uploaded yet',
      missingText: 'Add the PDF to public/cv/Ahmed-Ali-CV.pdf and set cv.available to true in src/content/profile.js.',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your next project",
      text: 'Open to planning, cost control, technical office and project management opportunities in Saudi Arabia.',
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      linkedinMissing: '[LinkedIn profile URL]',
      location: 'Location',
      locationValue: 'Saudi Arabia',
      copy: 'Copy',
      copied: 'Copied',
      form: {
        title: 'Send a message',
        name: 'Your name',
        email: 'Your email',
        company: 'Company (optional)',
        message: 'Message',
        submit: 'Open in email app',
        note: 'This site has no server. The button opens your own email app with the message filled in; nothing is sent until you press send there.',
        required: 'Please fill in your name, email and message.',
        opened: 'Your email app should open with the message ready to send.',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      top: 'Back to top',
    },
  },

  ar: {
    meta: {
      langLabel: 'English',
      langSwitchAria: 'التبديل إلى الإنجليزية',
    },
    nav: {
      about: 'نبذة',
      experience: 'الخبرات',
      expertise: 'التخصصات',
      skills: 'المهارات',
      projects: 'المشاريع',
      controls: 'ضبط المشاريع',
      contact: 'تواصل',
      menu: 'القائمة',
    },
    hero: {
      name: 'أحمد علي',
      titles: ['مهندس مدني', 'مهندس تخطيط', 'ضبط التكاليف', 'المكتب الفني', 'إدارة المشاريع'],
      statement: 'أحافظ على مشاريع الإنشاء ضمن الجدول الزمني والميزانية، من الخطة الأساسية الأولى حتى آخر مستخلص.',
      intro:
        'مهندس مدني بخبرة تزيد على 8 سنوات في إدارة المشاريع والتخطيط والجدولة والمكتب الفني وحصر الكميات وضبط التكاليف، مقيم في المملكة العربية السعودية.',
      downloadCv: 'تحميل السيرة الذاتية',
      contactMe: 'تواصل معي',
      photoPlaceholder: 'الصورة الشخصية',
      location: 'المملكة العربية السعودية',
    },
    about: {
      eyebrow: 'نبذة عني',
      title: 'حكم هندسي تدعمه بيانات المشروع',
      summary: [
        'مهندس مدني بخبرة تزيد على 8 سنوات في إدارة مشاريع الإنشاء، والتخطيط والجدولة، والهندسة الإنشائية، والتنفيذ في الموقع، وأعمال المكتب الفني، وحصر الكميات، وضبط التكاليف.',
        'خبرة في إدارة أعمال الإنشاء، وإعداد الجداول الزمنية وتحديثها، ومتابعة أداء المشروع، وتنسيق خطط المشتريات، وإدارة مستخلصات مقاولي الباطن، وإعداد المطالبات وأوامر التغيير، ودعم إدارة تكاليف المشروع.',
        'أعمل حاليًا في مشروع تطوير أبراج سكنية، وأتولى مسؤوليات فنية ومسؤوليات ضبط المشاريع في عدة تخصصات.',
      ],
      yearsLabel: 'سنوات الخبرة',
      workPhotoAlt: 'أحمد علي في المكتب الفني وأمامه جدول زمني على Primavera P6',
      strengthsTitle: 'نقاط القوة الأساسية',
      strengths: [
        'التخطيط والجدولة',
        'ضبط التكاليف والتدفق النقدي',
        'المكتب الفني ومخططات الورشة',
        'حصر الكميات وجداول الكميات',
        'المطالبات وأوامر التغيير',
        'التنفيذ في الموقع وقيادة الفرق',
      ],
    },
    experience: {
      eyebrow: 'الخبرات المهنية',
      title: 'المسار المهني',
      hint: 'اختر وظيفة لعرض المهام.',
      present: 'حتى الآن',
      companyPlaceholder: '[اسم الشركة]',
      items: [
        {
          id: 'current',
          role: 'مهندس تخطيط وتكاليف',
          company: 'LEVELs',
          dates: 'نوفمبر 2024 – حتى الآن',
          context: 'مشروع تطوير أبراج سكنية، جدة',
          current: true,
          points: [
            'تولي مسؤوليات المكتب الفني وضبط المشاريع في عدة تخصصات.',
            'الجدولة وضبط التكاليف وحصر الكميات والمستخلصات والمطالبات (انظر قسم المسؤوليات الحالية).',
          ],
        },
        {
          id: 'pm',
          role: 'مدير مشروع',
          company: 'أسايكو امتياز للمقاولات (مقاول باطن لدى ساجكو)',
          dates: 'نوفمبر 2022 – مايو 2024',
          context: 'مطار نيوم الدولي',
          points: [
            'إدارة أعمال الحفر والردم والبنية التحتية لمطار نيوم الدولي.',
            'تنسيق أكثر من 90 معدة ثقيلة ونحو 120 موظفًا.',
            'إدارة التنفيذ والتخطيط وضبط التكاليف وحصر الكميات وعمليات الموقع.',
            'متابعة تقدم المشروع والموارد والمتطلبات التعاقدية.',
          ],
        },
        {
          id: 'site',
          role: 'مدير موقع',
          company: 'المؤسسة الاقتصادية اليمنية',
          dates: 'أبريل 2020 – يوليو 2021',
          context: 'إنشاء المباني',
          points: [
            'الإشراف على أعمال الإنشاء، بما فيها الأعمال الإنشائية والمعمارية والكهروميكانيكية.',
            'إدارة المشتريات وجداول الكميات والجداول الزمنية والتنفيذ في الموقع.',
            'التنسيق مع مقاولي الباطن والفرق الفنية.',
          ],
        },
        {
          id: 'civil',
          role: 'مهندس مدني',
          company: 'المؤسسة الاقتصادية اليمنية',
          dates: 'فبراير 2019 – يناير 2020',
          context: 'مبانٍ تجارية وسكنية واجتماعية',
          points: [
            'العمل في مشاريع مبانٍ تجارية وسكنية واجتماعية.',
            'المشاركة في تقارير المشروع ومتابعة التنفيذ وإدارة الكميات.',
            'مشاريع بقيمة تقديرية إجمالية تقارب 2 مليون دولار أمريكي.',
          ],
        },
        {
          id: 'structural',
          role: 'مهندس إنشائي',
          dates: 'أكتوبر 2015 – نوفمبر 2016',
          context: 'المدينة الخضراء – عدن · مدينة روابي صنعاء',
          points: [
            'المشاركة في مشاريع الهندسة الإنشائية.',
            'العمل في مشروعي المدينة الخضراء – عدن ومدينة روابي صنعاء.',
          ],
        },
      ],
    },
    responsibilities: {
      eyebrow: 'المسؤوليات الحالية',
      title: 'ما أتولاه اليوم في مشروع قائم',
      groups: [
        {
          icon: 'bi-rulers',
          title: 'المكتب الفني',
          items: [
            'إعداد وتنسيق المخططات التنفيذية (Shop Drawings) المعمارية والإنشائية.',
            'إعداد وإدارة سجلات المخططات التنفيذية لجميع التخصصات.',
          ],
        },
        {
          icon: 'bi-calculator',
          title: 'الكميات والمستخلصات',
          items: [
            'حصر كميات الأعمال المعمارية والإنشائية وبعض الأعمال الكهروميكانيكية.',
            'إعداد جداول الكميات والتحقق من الكميات.',
            'إعداد ومراجعة المستخلصات المرحلية لمقاولي الباطن.',
            'توثيق المطالبات وأوامر التغيير.',
          ],
        },
        {
          icon: 'bi-calendar3-range',
          title: 'التخطيط والتقارير',
          items: [
            'إعداد الجداول الزمنية للمشروع وتحديثها ومتابعتها.',
            'تقارير تقدم المشروع الأسبوعية والشهرية.',
            'تخطيط المشتريات وتنسيقها.',
          ],
        },
        {
          icon: 'bi-cash-coin',
          title: 'التكاليف والتدفق النقدي',
          items: [
            'إعداد التدفق النقدي للمشروع ومتابعته.',
            'ضبط تكاليف المشروع ومتابعة الأداء المالي.',
          ],
        },
      ],
    },
    expertise: {
      eyebrow: 'التخصصات الأساسية',
      title: 'ستة تخصصات في رؤية واحدة للمشروع',
      items: [
        { icon: 'bi-diagram-3', title: 'تخطيط المشاريع', text: 'خطط أساسية وتحديثات ومسار حرج وخطط قصيرة المدى يستطيع الموقع الالتزام بها.' },
        { icon: 'bi-graph-down-arrow', title: 'ضبط التكاليف', text: 'متابعة الميزانية والتدفق النقدي والتوقعات ومؤشرات الأداء لحماية هامش المشروع.' },
        { icon: 'bi-folder2-open', title: 'المكتب الفني', text: 'المخططات التنفيذية وسجلاتها والتنسيق بين التصميم والاستشاري والموقع.' },
        { icon: 'bi-briefcase', title: 'إدارة المشاريع', text: 'قيادة التنفيذ والموارد ومقاولي الباطن والمتطلبات التعاقدية من البداية إلى النهاية.' },
        { icon: 'bi-clipboard-data', title: 'حصر الكميات', text: 'حصر الكميات وإعداد جداولها والتحقق منها والمستخلصات المرحلية.' },
        { icon: 'bi-truck', title: 'إدارة المشتريات', text: 'خطط مشتريات مرتبطة بالجدول الزمني لتصل المواد في وقت الحاجة إليها.' },
      ],
    },
    skills: {
      eyebrow: 'المهارات التقنية',
      title: 'البرامج والكفاءات الهندسية',
      note: 'النقاط توضح مجالات العمل التي تخدمها كل مهارة.',
      areas: { plan: 'التخطيط', cost: 'التكاليف', design: 'المخططات', report: 'التقارير' },
      groups: [
        {
          title: 'البرامج',
          items: [
            { icon: 'bi-calendar-week', name: 'Primavera P6', desc: 'تخطيط وجدولة المشاريع', areas: ['plan', 'report'] },
            { icon: 'bi-file-earmark-spreadsheet', name: 'Microsoft Excel', desc: 'تقارير إنشائية متقدمة وضبط التكاليف', areas: ['cost', 'report', 'plan'] },
            { icon: 'bi-bar-chart-line', name: 'Microsoft Power BI', desc: 'لوحات المتابعة وتحليل أداء المشروع', areas: ['report', 'cost'] },
            { icon: 'bi-vector-pen', name: 'AutoCAD', desc: 'الرسومات الفنية والمخططات التنفيذية', areas: ['design'] },
            { icon: 'bi-boxes', name: 'Autodesk Revit', desc: 'تنسيق نمذجة معلومات البناء (BIM)', areas: ['design'] },
            { icon: 'bi-signpost-split', name: 'Civil 3D', desc: 'التصميم المدني والبنية التحتية', areas: ['design'] },
          ],
        },
        {
          title: 'الهندسة وضبط المشاريع',
          items: [
            { icon: 'bi-list-check', name: 'حصر الكميات وجداولها', desc: 'الحصر وإعداد الجداول والتحقق', areas: ['cost'] },
            { icon: 'bi-speedometer2', name: 'إدارة القيمة المكتسبة EVM', desc: 'قياس الأداء بالقيمة المكتسبة', areas: ['cost', 'plan', 'report'] },
            { icon: 'bi-activity', name: 'منحنى S و SPI و CPI', desc: 'التدفق النقدي والتوقعات', areas: ['cost', 'plan', 'report'] },
            { icon: 'bi-box-seam', name: 'تخطيط المشتريات', desc: 'مشتريات مرتبطة بالجدول الزمني', areas: ['plan'] },
            { icon: 'bi-file-earmark-text', name: 'المطالبات وأوامر التغيير', desc: 'إثبات الاستحقاق والتوثيق', areas: ['cost', 'report'] },
            { icon: 'bi-shield-check', name: 'ضبط التكاليف والمتابعة', desc: 'الميزانية مقابل الفعلي والتوقعات', areas: ['cost', 'report'] },
          ],
        },
      ],
    },
    projects: {
      eyebrow: 'مشاريع مختارة',
      title: 'مشاريع شاركت فيها',
      roleLabel: 'دوري',
      imagePlaceholder: 'صورة المشروع',
      gallery: 'عرض الصور',
      close: 'إغلاق',
      prev: 'الصورة السابقة',
      next: 'الصورة التالية',
      items: [
        {
          id: 'towers',
          name: 'مشاريع الأبراج السكنية',
          location: 'المملكة العربية السعودية',
          role: 'المكتب الفني وضبط المشاريع',
          text: 'تطوير سكني متعدد الأبراج: مخططات تنفيذية وكميات ومستخلصات وجداول زمنية وضبط تكاليف.',
          images: ['images/projects/towers-1.jpg', 'images/projects/towers-2.jpg', 'images/projects/towers-3.jpg', 'images/projects/towers-4.jpg', 'images/projects/towers-5.jpg'],
        },
        {
          id: 'neom',
          name: 'مطار نيوم الدولي',
          location: 'نيوم، المملكة العربية السعودية',
          role: 'مدير مشروع · الحفر والبنية التحتية',
          text: 'أعمال الحفر والردم والبنية التحتية، مع تنسيق أكثر من 90 معدة ثقيلة ونحو 120 موظفًا.',
          images: [],
        },
        {
          id: 'green',
          name: 'المدينة الخضراء – عدن',
          location: 'عدن، اليمن',
          role: 'مهندس إنشائي',
          text: 'المشاركة في أعمال الهندسة الإنشائية.',
          images: [],
        },
        {
          id: 'rawabi',
          name: 'مدينة روابي صنعاء',
          location: 'صنعاء، اليمن',
          role: 'مهندس إنشائي',
          text: 'المشاركة في أعمال الهندسة الإنشائية.',
          images: [],
        },
      ],
    },
    controls: {
      eyebrow: 'ضبط المشاريع',
      title: 'كيف أجعل المشروع قابلًا للقياس',
      text: 'كل تقرير أعدّه يربط الوقت والتكلفة والمشتريات، لترى الإدارة صورة واحدة متسقة لموقف المشروع.',
      chartCaption: 'منحنى S توضيحي: التقدم المخطط مقابل الفعلي. ليس بيانات من أي مشروع.',
      planned: 'المخطط',
      actual: 'الفعلي',
      dataDate: 'تاريخ البيانات',
      items: [
        { icon: 'bi-calendar-week', title: 'Primavera P6', text: 'بناء الجدول الزمني للمشروع وتحديثه.' },
        { icon: 'bi-layers', title: 'الخطة الأساسية والجداول المحدّثة', text: 'اعتماد الخطط الأساسية والتحديثات الدورية ومتابعة الانحرافات.' },
        { icon: 'bi-speedometer2', title: 'القيمة المكتسبة ومتابعة الأداء', text: 'القيمة المكتسبة ومؤشرا SPI و CPI لقياس التقدم بدقة.' },
        { icon: 'bi-graph-up-arrow', title: 'توقع التكاليف', text: 'التكلفة المتوقعة عند الإنجاز واتجاهات التكلفة.' },
        { icon: 'bi-box-seam', title: 'متابعة المشتريات', text: 'المواد طويلة التوريد والتسليمات مرتبطة بالأنشطة.' },
        { icon: 'bi-cash-stack', title: 'التدفق النقدي', text: 'التدفقات النقدية الداخلة والخارجة المخططة مقابل الفعلية.' },
        { icon: 'bi-activity', title: 'تقارير منحنى S', text: 'منحنيات التقدم التراكمي للتقارير الأسبوعية والشهرية.' },
      ],
    },
    cv: {
      eyebrow: 'السيرة الذاتية',
      title: 'حمّل سيرتي الذاتية كاملة',
      text: 'سجل كامل بوظائفي ومشاريعي وتعليمي ودوراتي بصيغة PDF.',
      button: 'تحميل السيرة الذاتية (PDF)',
      missingTitle: 'لم يتم رفع ملف السيرة الذاتية بعد',
      missingText: 'أضف ملف PDF في المسار public/cv/Ahmed-Ali-CV.pdf ثم غيّر cv.available إلى true في الملف src/content/profile.js.',
    },
    contact: {
      eyebrow: 'تواصل',
      title: 'لنتحدث عن مشروعك القادم',
      text: 'متاح لفرص التخطيط وضبط التكاليف والمكتب الفني وإدارة المشاريع في المملكة العربية السعودية.',
      email: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      linkedin: 'لينكدإن',
      linkedinMissing: '[رابط حساب لينكدإن]',
      location: 'الموقع',
      locationValue: 'المملكة العربية السعودية',
      copy: 'نسخ',
      copied: 'تم النسخ',
      form: {
        title: 'أرسل رسالة',
        name: 'الاسم',
        email: 'بريدك الإلكتروني',
        company: 'الشركة (اختياري)',
        message: 'الرسالة',
        submit: 'فتح في تطبيق البريد',
        note: 'هذا الموقع لا يحتوي على خادم. الزر يفتح تطبيق البريد لديك والرسالة جاهزة، ولن تُرسل إلا عندما تضغط إرسال هناك.',
        required: 'يرجى كتابة الاسم والبريد الإلكتروني والرسالة.',
        opened: 'يُفترض أن يفتح تطبيق البريد لديك والرسالة جاهزة للإرسال.',
      },
    },
    footer: {
      rights: 'جميع الحقوق محفوظة.',
      top: 'العودة للأعلى',
    },
  },
};
