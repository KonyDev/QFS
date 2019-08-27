#import <objc/runtime.h>
#import "allincludes.h"
#import "ClassExtension.h"
#import "PointerSupport.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wformat-security"
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wincompatible-pointer-types"
#pragma clang diagnostic ignored "-Wnullability-completeness"
@implementation UIStackView (Exports)
-(id) jsinitWithFrame: (CGRect) frame 
{
	id resultVal__;
	resultVal__ = [[self initWithFrame: frame ] autorelease];
	return resultVal__;
}
-(id) jsinitWithArrangedSubviews: (NSArray *) views 
{
	id resultVal__;
	resultVal__ = [[self initWithArrangedSubviews: views ] autorelease];
	return resultVal__;
}
-(id) jsinitWithCoder: (NSCoder *) coder 
{
	id resultVal__;
	resultVal__ = [[self initWithCoder: coder ] autorelease];
	return resultVal__;
}
@end
static void addProtocols()
{
	class_addProtocol([UIStackView class], @protocol(UIStackViewInstanceExports));
	class_addProtocol([UIStackView class], @protocol(UIStackViewClassExports));
}
static void registerCFunctions(JSContext* context)
{
}
static void registerEnumConstants(JSContext* context)
{
	context[@"UIStackViewDistributionFill"] = @0L;
	context[@"UIStackViewDistributionFillEqually"] = @1L;
	context[@"UIStackViewDistributionFillProportionally"] = @2L;
	context[@"UIStackViewDistributionEqualSpacing"] = @3L;
	context[@"UIStackViewDistributionEqualCentering"] = @4L;

	context[@"UIStackViewAlignmentFill"] = @0L;
	context[@"UIStackViewAlignmentLeading"] = @1L;
	context[@"UIStackViewAlignmentTop"] = @1L;
	context[@"UIStackViewAlignmentFirstBaseline"] = @2L;
	context[@"UIStackViewAlignmentCenter"] = @3L;
	context[@"UIStackViewAlignmentTrailing"] = @4L;
	context[@"UIStackViewAlignmentBottom"] = @4L;
	context[@"UIStackViewAlignmentLastBaseline"] = @5L;

}
static void registerGlobalConstants(JSContext* context)
{
	void* p; p = NULL;
	p = (void*) &UIStackViewSpacingUseDefault;
	if (p != NULL) context[@"UIStackViewSpacingUseDefault"] = @(UIStackViewSpacingUseDefault);
	p = (void*) &UIStackViewSpacingUseSystem;
	if (p != NULL) context[@"UIStackViewSpacingUseSystem"] = @(UIStackViewSpacingUseSystem);
}
void load_UIKit_UIStackView_symbols(JSContext* context)
{
    addProtocols();
    registerEnumConstants(context);
    registerCFunctions(context);
    registerGlobalConstants(context);
}
#pragma clang diagnostic pop
