import React from 'react';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  details: string[];
}

export interface LicenseCertification {
  id:string;
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  credentialLink?: string;
  skills: string[];
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  isFeatured?: boolean; // Added to highlight Capstone
}

// FIX: Add missing ATSResult type and its dependent interfaces for the ATS analysis section.
export interface ATSWorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface ATSEducation {
  degree: string;
  institution: string;
  duration: string;
}

export interface ATSResult {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  workExperience: ATSWorkExperience[];
  education: ATSEducation[];
  fitScore: number;
  matchedSkills: string[];
  missingSkills: string[];
}