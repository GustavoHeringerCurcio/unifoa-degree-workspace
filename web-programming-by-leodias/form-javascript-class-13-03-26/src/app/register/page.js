"use client";

import { useState } from "react";
import Link from "next/link";
import { TextInput, Button } from "flowbite-react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const getStrengthLabel = (strength) => {
    const labels = ["Muito fraca", "Fraca", "Média", "Forte", "Muito forte"];
    return labels[strength - 1] || "Muito fraca";
  };

  const getStrengthColor = (strength) => {
    const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];
    return colors[strength - 1] || "bg-red-500";
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Nome deve ter no mínimo 3 caracteres";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de email inválido";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Senha é obrigatória";
    } else if (formData.password.length < 6) {
      newErrors.password = "Senha deve ter no mínimo 6 caracteres";
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirmação de senha é obrigatória";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não conferem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSuccessMessage("Conta criada com sucesso! Redirecionando...");
      console.log("Registration attempt:", {
        name: formData.name,
        email: formData.email,
        timestamp: new Date().toISOString(),
      });

      setTimeout(() => {
        // Aqui você pode redirecionar para login ou home
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: "Erro ao criar conta. Tente novamente.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-indigo-600 to-blue-600 rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Criar Conta
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Registre-se para começar agora
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
          {/* Success Message */}
          {successMessage && (
            <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium text-center">
                ✓ {successMessage}
              </p>
            </div>
          )}

          {/* Submit Error */}
          {errors.submit && (
            <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 font-medium text-center">
                ✗ {errors.submit}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>
                <TextInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="pl-10"
                  color={errors.name ? "failure" : "gray"}
                  disabled={loading}
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                <TextInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="pl-10"
                  color={errors.email ? "failure" : "gray"}
                  disabled={loading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                <TextInput
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="pl-10"
                  color={errors.password ? "failure" : "gray"}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM2 10a8 8 0 1111.955 7.02A9.993 9.993 0 0110 18C4.477 18 0 13.523 0 8s4.477-10 10-10zm8-2a4 4 0 00-3.464 6.707l4.17-4.17A3.986 3.986 0 0010 8z" clipRule="evenodd" /></svg>
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-2 space-y-2">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i < passwordStrength
                            ? getStrengthColor(passwordStrength)
                            : "bg-gray-300 dark:bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                  <p className={`text-xs font-semibold ${
                    passwordStrength <= 1 ? "text-red-600 dark:text-red-400" :
                    passwordStrength === 2 ? "text-orange-600 dark:text-orange-400" :
                    passwordStrength === 3 ? "text-yellow-600 dark:text-yellow-400" :
                    "text-green-600 dark:text-green-400"
                  }`}>
                    Força: {getStrengthLabel(passwordStrength)}
                  </p>
                </div>
              )}

              {errors.password && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Confirmar Senha
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                <TextInput
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="pl-10"
                  color={errors.confirmPassword ? "failure" : "gray"}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
                  disabled={loading}
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-14-14zM2 10a8 8 0 1111.955 7.02A9.993 9.993 0 0110 18C4.477 18 0 13.523 0 8s4.477-10 10-10zm8-2a4 4 0 00-3.464 6.707l4.17-4.17A3.986 3.986 0 0010 8z" clipRule="evenodd" /></svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Password Match Indicator */}
            {formData.password && formData.confirmPassword && (
              <div className={`p-2 rounded-lg text-sm font-medium text-center ${
                formData.password === formData.confirmPassword
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
              }`}>
                {formData.password === formData.confirmPassword
                  ? "✓ Senhas conferem"
                  : "✗ Senhas não conferem"}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Criando conta...
                </span>
              ) : (
                "Criar Conta"
              )}
            </Button>
          </form>

          {/* Reset Button */}
          <Button
            type="button"
            onClick={handleReset}
            disabled={loading}
            className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
          >
            Limpar
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                Já tem conta?
              </span>
            </div>
          </div>

          {/* Login Link */}
          <Link href="/login">
            <button className="w-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 font-semibold py-3 rounded-lg transition-all duration-200 border border-indigo-200 dark:border-indigo-800">
              Voltar para Login
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
          Seus dados estão protegidos e seguros
        </p>
      </div>
    </div>
  );
}
