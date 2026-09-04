import React, { useState } from 'react';

const TIERS = [
    {
        id: 'tier1',
        label: 'Tier 1: Field Intake',
        badge: 'Masked PII',
        badgeColor: 'bg-slate-100 text-slate-600',
        description: 'GPS Geofenced, strictly limited to assigned rapid intake cases without access to sealed records.',
    },
    {
        id: 'tier2',
        label: 'Tier 2: Active Case Mgmt',
        badge: 'Care Planning',
        badgeColor: 'bg-blue-50 text-blue-600',
        description: 'Full assigned beneficiary records, case planning, care plans, and referral submission.',
    },
    {
        id: 'tier3',
        label: 'Tier 3: Clinical & Psych',
        badge: 'Full Dossier',
        badgeColor: 'bg-blue-700 text-white',
        description: 'Psychosocial assessment, medical records, court testimony notes, and transfer dispatch.',
    },
    {
        id: 'tier4',
        label: 'Tier 4: Judicial / Admin',
        badge: 'Dual-Custody',
        badgeColor: 'bg-purple-50 text-purple-600',
        description: 'Dual-authorization seal break, WORM audit archive export, and emergency reopening.',
    },
];

export default function ProvisionUserModal({ isOpen, onClose, onSubmit }) {
    const [form, setForm] = useState({
        fullName: '',
        staffId: '',
        workEmail: '',
        contactPhone: '',
        role: '',
        partnerAgency: '',
        primaryStation: '',
        tier: 'tier3',
    });

    if (!isOpen) return null;

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 overflow-y-auto py-8">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 text-white px-6 py-5 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl leading-none"
                        aria-label="Close"
                    >
                        ×
                    </button>
                    <div className="flex items-start gap-3">
                        <div className="bg-blue-600 rounded-lg p-2 mt-0.5">
                            <span className="text-white text-lg">👤+</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-lg font-bold">Provision Practitioner or Clinical Specialist</h2>
                                <span className="text-[10px] font-mono uppercase tracking-wide bg-slate-700 text-slate-200 px-2 py-0.5 rounded">
                                    RBAC Provisioning
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 mt-1">
                                Assign multi-tenant jurisdiction, clinical accreditation, statutory RBAC clearance tier, and PII masking scopes.
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="px-6 py-6 max-h-[70vh] overflow-y-auto">
                    {/* 1. Identity */}
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                        <span className="text-blue-600">🪪</span> 1. PRACTITIONER IDENTITY &amp; CIVIL REGISTRY
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Full Legal Name *</label>
                            <input
                                required
                                value={form.fullName}
                                onChange={update('fullName')}
                                placeholder="e.g. Dr. Alistair Vance"
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Staff / Practitioner ID</label>
                            <input
                                readOnly
                                value={form.staffId || 'SCO-4996'}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-100 text-slate-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Official Work Email *</label>
                            <input
                                required
                                type="email"
                                value={form.workEmail}
                                onChange={update('workEmail')}
                                placeholder="a.vance@partner-ngo.org"
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Contact Phone / Secure Signal</label>
                            <input
                                value={form.contactPhone}
                                onChange={update('contactPhone')}
                                placeholder="+977 (01) 554-8291"
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Professional Title / Clinical Role *</label>
                            <select
                                required
                                value={form.role}
                                onChange={update('role')}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select a role</option>
                                <option value="senior_case_officer">Senior Case Officer</option>
                                <option value="case_manager">Case Manager</option>
                                <option value="social_worker">Social Worker</option>
                                <option value="clinical_specialist">Clinical Specialist</option>
                                <option value="system_admin">System Admin</option>
                            </select>
                        </div>
                    </div>

                    {/* 2. Institutional Tenant */}
                    <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                        <span className="text-blue-600">🏢</span> 2. INSTITUTIONAL TENANT &amp; SCOPING
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Implementing Partner / Agency *</label>
                            <select
                                required
                                value={form.partnerAgency}
                                onChange={update('partnerAgency')}
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select agency</option>
                                <option value="region4_central">Region 4 Central HQ</option>
                                <option value="region1">Region 1</option>
                                <option value="region2">Region 2</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 mb-1">Primary Station / Field Office *</label>
                            <input
                                required
                                value={form.primaryStation}
                                onChange={update('primaryStation')}
                                placeholder="Kathmandu Desk & Field Ops"
                                className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* 3. RBAC Tier */}
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                            <span className="text-blue-600">🛡️</span> 3. STATUTORY RBAC CLEARANCE TIER
                        </h3>
                        <span className="text-[11px] text-slate-400 font-mono">Determines Decryption Rights</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                        {TIERS.map((tier) => (
                            <label
                                key={tier.id}
                                className={`relative cursor-pointer rounded-xl border p-3 text-sm transition-colors ${form.tier === tier.id
                                        ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/40'
                                        : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="tier"
                                    value={tier.id}
                                    checked={form.tier === tier.id}
                                    onChange={update('tier')}
                                    className="absolute top-3 left-3 accent-blue-600"
                                />
                                <div className="pl-6 flex items-center justify-between gap-2 mb-1">
                                    <span className="font-semibold text-slate-800">{tier.label}</span>
                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${tier.badgeColor}`}>
                                        {tier.badge}
                                    </span>
                                </div>
                                <p className="pl-6 text-xs text-slate-500 leading-snug">{tier.description}</p>
                            </label>
                        ))}
                    </div>
                </form>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-100 bg-slate-50">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-5 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Provision User
                    </button>
                </div>
            </div>
        </div>
    );
}