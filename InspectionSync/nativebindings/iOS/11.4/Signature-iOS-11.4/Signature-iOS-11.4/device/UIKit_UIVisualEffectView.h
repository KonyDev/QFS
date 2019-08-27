#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIVisualEffectView_symbols(JSContext*);
@protocol UIVisualEffectViewInstanceExports<JSExport, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic,strong) UIView * contentView;
@property (copy,nonatomic) UIVisualEffect * effect;
JSExportAs(initWithEffect,
-(id) jsinitWithEffect: (UIVisualEffect *) effect );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIVisualEffectViewClassExports<JSExport, NSSecureCodingClassExports_>
@end
#pragma clang diagnostic pop