#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
static void addProtocols()
{
	class_addProtocol([CAShapeLayer class], @protocol(CAShapeLayerInstanceExports));
	class_addProtocol([CAShapeLayer class], @protocol(CAShapeLayerClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &kCALineCapButt;
	if (p != NULL) context[@"kCALineCapButt"] = kCALineCapButt;
	p = (void*) &kCALineJoinBevel;
	if (p != NULL) context[@"kCALineJoinBevel"] = kCALineJoinBevel;
	p = (void*) &kCAFillRuleEvenOdd;
	if (p != NULL) context[@"kCAFillRuleEvenOdd"] = kCAFillRuleEvenOdd;
	p = (void*) &kCALineJoinMiter;
	if (p != NULL) context[@"kCALineJoinMiter"] = kCALineJoinMiter;
	p = (void*) &kCALineCapRound;
	if (p != NULL) context[@"kCALineCapRound"] = kCALineCapRound;
	p = (void*) &kCALineJoinRound;
	if (p != NULL) context[@"kCALineJoinRound"] = kCALineJoinRound;
	p = (void*) &kCALineCapSquare;
	if (p != NULL) context[@"kCALineCapSquare"] = kCALineCapSquare;
	p = (void*) &kCAFillRuleNonZero;
	if (p != NULL) context[@"kCAFillRuleNonZero"] = kCAFillRuleNonZero;
}
void load_QuartzCore_CAShapeLayer_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
