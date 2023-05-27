export type StepikCoursesResponse = {
  meta: StepikResponseMeta;
  courses: StepikCourseData[];
};

export type StepikCourseData = {
  id: number;
  summary: string;
  workload: string;
  cover: string;
  intro: string;
  course_format: string;
  target_audience: string;
  certificate_footer: null;
  certificate_cover_org: null;
  is_certificate_issued: boolean;
  is_certificate_auto_issued: boolean;
  certificate_regular_threshold: null;
  certificate_distinction_threshold: null;
  instructors: number[];
  certificate: string;
  requirements: string;
  description: string;
  sections: number[];
  total_units: number;
  enrollment: null;
  is_favorite: boolean;
  actions: Actions;
  progress: null;
  first_lesson: number;
  first_unit: number;
  certificate_link: null;
  certificate_regular_link: null;
  certificate_distinction_link: null;
  user_certificate: null;
  referral_link: null;
  schedule_link: null;
  schedule_long_link: null;
  first_deadline: null;
  last_deadline: null;
  subscriptions: string[];
  announcements: unknown[];
  is_contest: boolean;
  is_self_paced: boolean;
  is_adaptive: boolean;
  is_idea_compatible: boolean;
  is_in_wishlist: boolean;
  last_step: string;
  intro_video: null;
  social_providers: unknown[];
  authors: number[];
  tags: unknown[];
  has_tutors: boolean;
  is_enabled: boolean;
  is_proctored: boolean;
  proctor_url: null;
  review_summary: number;
  schedule_type: string;
  certificates_count: number;
  learners_count: number;
  lessons_count: number;
  quizzes_count: number;
  challenges_count: number;
  peer_reviews_count: number;
  instructor_reviews_count: number;
  videos_duration: number;
  time_to_complete: null;
  is_popular: boolean;
  is_processed_with_paddle: boolean;
  is_unsuitable: boolean;
  is_paid: boolean;
  price: null;
  currency_code: null;
  display_price: string;
  default_promo_code_name: null;
  default_promo_code_price: null;
  default_promo_code_discount: null;
  default_promo_code_is_percent_discount: null;
  default_promo_code_expire_date: null;
  continue_url: string;
  readiness: number;
  is_archived: boolean;
  options: unknown;
  price_tier: null;
  position: number;
  is_censored: boolean;
  difficulty: null | string;
  acquired_skills: string[];
  acquired_assets: string[];
  learning_format: string;
  content_details: unknown[];
  issue: null;
  course_type: string;
  possible_type: null;
  is_certificate_with_score: boolean;
  preview_lesson: null;
  preview_unit: null;
  possible_currencies: unknown[];
  commission_basic: null;
  commission_promo: null;
  with_certificate: boolean;
  child_courses: unknown[];
  child_courses_count: number;
  parent_courses: unknown[];
  became_paid_at: null;
  owner: number;
  language: string;
  is_featured: boolean;
  is_public: boolean;
  canonical_url: string;
  title: string;
  slug: string;
  begin_date: Date | null;
  end_date: null;
  soft_deadline: null;
  hard_deadline: null;
  grading_policy: string;
  begin_date_source: Date | null;
  end_date_source: null;
  soft_deadline_source: null;
  hard_deadline_source: null;
  grading_policy_source: string;
  is_active: boolean;
  create_date: Date;
  update_date: Date;
  learners_group: null;
  testers_group: null;
  moderators_group: null;
  assistants_group: null;
  teachers_group: null;
  admins_group: null;
  discussions_count: number;
  discussion_proxy: null;
  discussion_threads: unknown[];
  lti_consumer_key: string;
  lti_secret_key: string;
  lti_private_profile: boolean;
};

export type Actions = {
  view_reports: EditAdvancedSettings;
  edit_reports: EditAdvancedSettings;
  view_grade_book_page: EditAdvancedSettings;
  view_grade_book: EditAdvancedSettings;
  edit_lti: EditAdvancedSettings;
  edit_advanced_settings: EditAdvancedSettings;
  manage_permissions: EditAdvancedSettings;
  view_revenue: CanBeBought;
  can_be_bought: CanBeBought;
  can_be_deleted: CanBeBought;
};

export type CanBeBought = {
  enabled: boolean;
};

export type EditAdvancedSettings = {
  enabled: boolean;
  needs_permission: NeedsPermission;
};

export enum NeedsPermission {
  Admin = 'admin',
  Assist = 'assist',
  Teach = 'teach',
}

export type StepikCourseReviewSummaryResponse = {
  meta: StepikResponseMeta;
  'course-review-summaries': StepikCourseReviewSummary[];
};

export type StepikCourseReviewSummary = {
  id: number;
  course: number;
  average: number;
  count: number;
  distribution: number[];
};

export type StepikResponseMeta = {
  page: number;
  has_next: boolean;
  has_previous: boolean;
};
