import React, { useState } from 'react';

function SectionHeader({ n, children }) {
    return (
        <div className="flex items-center gap-2 mb-4 mt-2">
            <span className="w-5 h-5 rounded-full bg-primary text-on-primary text-[11px] font-bold flex items-center justify-center shrink-0">
                {n}
            </span>
            <h3 className="text-xs font-bold text-on-surface uppercase tracking-wide">{children}</h3>
        </div>
    );
}

function Field({ label, required, children }) {
    return (
        <div>
            <label className="block text-sm font-medium text-on-surface mb-1">
                {label} {required && <span className="text-error">*</span>}
            </label>
            {children}
        </div>
    );
}

const inputClass =
    'w-full h-10 rounded-lg border border-outline-variant px-3 text-sm bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all';

export default function RegisterEntityModal({ isOpen, onClose, onSubmit }) {
    const [form, setForm] = useState({
        legalName: '',
        acronym: '',
        entityType: 'INGO (International NGO)',
        registrationNo: '',
        taxId: '',
        cluster: 'Kathmandu Valley & Border West',
        district: '',
        hqAddress: '',
        caseloadQuota: '',
        dataSharingTier: 'Full MDT Authorized (Multi-Disciplinary Team)',
        liaisonEmail: '',
        liaisonPhone: '',
    });

    if (!isOpen) return null;

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(form);
        onClose?.();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 py-8 px-4">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-outline-variant shrink-0">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary shrink-0 mt-0.5">
                            <span className="material-symbols-outlined">domain</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-on-surface leading-tight">
                                Register Partner NGO / Implementing Entity
                            </h2>
                            <p className="text-sm text-on-surface-variant mt-1">
                                Configure institutional tenant, accreditation status, statutory jurisdiction, and data sharing protocols.
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-on-surface-variant hover:bg-surface-variant p-1.5 rounded-full transition-colors shrink-0"
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="px-6 py-6 overflow-y-auto space-y-6">
                    {/* 1. Organization & Legal Identity */}
                    <div>
                        <SectionHeader n={1}>Organization &amp; Legal Identity</SectionHeader>
                        <div className="space-y-4">
                            <Field label="Legal Name of Organization" required>
                                <input
                                    required
                                    value={form.legalName}
                                    onChange={update('legalName')}
                                    placeholder="e.g. Plan International Child Rescue Division"
                                    className={inputClass}
                                />
                            </Field>
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Acronym / Identifier Code" required>
                                    <input
                                        required
                                        value={form.acronym}
                                        onChange={update('acronym')}
                                        placeholder="E.G. NGO-PICR-7821"
                                        className={inputClass + ' font-mono uppercase placeholder:normal-case'}
                                    />
                                </Field>
                                <Field label="Organization Entity Type" required>
                                    <select value={form.entityType} onChange={update('entityType')} className={inputClass}>
                                        <option>INGO (International NGO)</option>
                                        <option>Local / National NGO</option>
                                        <option>Government Body</option>
                                        <option>Donor Agency</option>
                                        <option>UN Agency</option>
                                    </select>
                                </Field>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Registration / Charter No.">
                                    <input
                                        value={form.registrationNo}
                                        onChange={update('registrationNo')}
                                        placeholder="e.g. SWC-REG-84920-KTM"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Tax Exemption / PAN ID">
                                    <input
                                        value={form.taxId}
                                        onChange={update('taxId')}
                                        placeholder="e.g. 600293811"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>
                        </div>
                    </div>

                    {/* 2. Geographic Jurisdiction & Cluster */}
                    <div>
                        <SectionHeader n={2}>Geographic Jurisdiction &amp; Cluster</SectionHeader>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Primary Operational Cluster" required>
                                    <select value={form.cluster} onChange={update('cluster')} className={inputClass}>
                                        <option>Kathmandu Valley &amp; Border West</option>
                                        <option>Eastern Region</option>
                                        <option>Western Region</option>
                                        <option>Mid-Western Region</option>
                                        <option>Far-Western Region</option>
                                    </select>
                                </Field>
                                <Field label="Administrative District / Zone">
                                    <input
                                        value={form.district}
                                        onChange={update('district')}
                                        placeholder="e.g. Bagmati District Zone 3"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>
                            <Field label="Headquarters Physical Address">
                                <input
                                    value={form.hqAddress}
                                    onChange={update('hqAddress')}
                                    placeholder="Street Address, Block, Ward & Municipal District"
                                    className={inputClass}
                                />
                            </Field>
                        </div>
                    </div>

                    {/* 3. Capacity & Data Sharing Protocols */}
                    <div>
                        <SectionHeader n={3}>Capacity &amp; Data Sharing Protocols</SectionHeader>
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Initial Caseload Capacity Quota" required>
                                    <div className="relative">
                                        <input
                                            required
                                            type="number"
                                            value={form.caseloadQuota}
                                            onChange={update('caseloadQuota')}
                                            placeholder="50"
                                            className={inputClass + ' pr-14'}
                                        />
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant">
                                            cases
                                        </span>
                                    </div>
                                </Field>
                                <Field label="Data Sharing Protocol Tier" required>
                                    <select value={form.dataSharingTier} onChange={update('dataSharingTier')} className={inputClass}>
                                        <option>Full MDT Authorized (Multi-Disciplinary Team)</option>
                                        <option>Restricted / Case-Level Only</option>
                                        <option>Aggregate Statistics Only</option>
                                        <option>No External Data Sharing</option>
                                    </select>
                                </Field>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Field label="Primary Liaison Officer Email" required>
                                    <input
                                        required
                                        type="email"
                                        value={form.liaisonEmail}
                                        onChange={update('liaisonEmail')}
                                        placeholder="liaison@partner-org.org"
                                        className={inputClass}
                                    />
                                </Field>
                                <Field label="Liaison Contact Phone">
                                    <input
                                        value={form.liaisonPhone}
                                        onChange={update('liaisonPhone')}
                                        placeholder="+977 1 4220000"
                                        className={inputClass}
                                    />
                                </Field>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t border-outline-variant bg-surface-container-lowest shrink-0">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold text-on-surface-variant hover:bg-surface-variant transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-on-primary hover:bg-primary/90 shadow-md transition-colors"
                    >
                        Register Entity
                    </button>
                </div>
            </div>
        </div>
    );
}