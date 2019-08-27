#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation CAAnimation (Exports)
-(id) jsinitWithCoder: (NSCoder *) aDecoder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: aDecoder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([CAAnimation class], @protocol(CAAnimationInstanceExports));
	class_addProtocol([CAAnimation class], @protocol(CAAnimationClassExports));
	class_addProtocol([CATransition class], @protocol(CATransitionInstanceExports));
	class_addProtocol([CATransition class], @protocol(CATransitionClassExports));
	class_addProtocol([CAKeyframeAnimation class], @protocol(CAKeyframeAnimationInstanceExports));
	class_addProtocol([CAKeyframeAnimation class], @protocol(CAKeyframeAnimationClassExports));
	class_addProtocol([CASpringAnimation class], @protocol(CASpringAnimationInstanceExports));
	class_addProtocol([CASpringAnimation class], @protocol(CASpringAnimationClassExports));
	class_addProtocol([CAPropertyAnimation class], @protocol(CAPropertyAnimationInstanceExports));
	class_addProtocol([CAPropertyAnimation class], @protocol(CAPropertyAnimationClassExports));
	class_addProtocol([CABasicAnimation class], @protocol(CABasicAnimationInstanceExports));
	class_addProtocol([CABasicAnimation class], @protocol(CABasicAnimationClassExports));
	class_addProtocol([CAAnimationGroup class], @protocol(CAAnimationGroupInstanceExports));
	class_addProtocol([CAAnimationGroup class], @protocol(CAAnimationGroupClassExports));
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
	p = (void*) &kCAAnimationCubic;
	if (p != NULL) context[@"kCAAnimationCubic"] = kCAAnimationCubic;
	p = (void*) &kCAAnimationRotateAutoReverse;
	if (p != NULL) context[@"kCAAnimationRotateAutoReverse"] = kCAAnimationRotateAutoReverse;
	p = (void*) &kCATransitionFromLeft;
	if (p != NULL) context[@"kCATransitionFromLeft"] = kCATransitionFromLeft;
	p = (void*) &kCATransitionPush;
	if (p != NULL) context[@"kCATransitionPush"] = kCATransitionPush;
	p = (void*) &kCATransitionReveal;
	if (p != NULL) context[@"kCATransitionReveal"] = kCATransitionReveal;
	p = (void*) &kCAAnimationCubicPaced;
	if (p != NULL) context[@"kCAAnimationCubicPaced"] = kCAAnimationCubicPaced;
	p = (void*) &kCATransitionFade;
	if (p != NULL) context[@"kCATransitionFade"] = kCATransitionFade;
	p = (void*) &kCAAnimationPaced;
	if (p != NULL) context[@"kCAAnimationPaced"] = kCAAnimationPaced;
	p = (void*) &kCATransitionFromRight;
	if (p != NULL) context[@"kCATransitionFromRight"] = kCATransitionFromRight;
	p = (void*) &kCATransitionFromBottom;
	if (p != NULL) context[@"kCATransitionFromBottom"] = kCATransitionFromBottom;
	p = (void*) &kCAAnimationDiscrete;
	if (p != NULL) context[@"kCAAnimationDiscrete"] = kCAAnimationDiscrete;
	p = (void*) &kCAAnimationRotateAuto;
	if (p != NULL) context[@"kCAAnimationRotateAuto"] = kCAAnimationRotateAuto;
	p = (void*) &kCATransitionMoveIn;
	if (p != NULL) context[@"kCATransitionMoveIn"] = kCATransitionMoveIn;
	p = (void*) &kCAAnimationLinear;
	if (p != NULL) context[@"kCAAnimationLinear"] = kCAAnimationLinear;
	p = (void*) &kCATransitionFromTop;
	if (p != NULL) context[@"kCATransitionFromTop"] = kCATransitionFromTop;
}
void QuartzCore_CAAnimationProtocols()
{
	(void)@protocol(CAAnimationDelegate);
}
void load_QuartzCore_CAAnimation_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
