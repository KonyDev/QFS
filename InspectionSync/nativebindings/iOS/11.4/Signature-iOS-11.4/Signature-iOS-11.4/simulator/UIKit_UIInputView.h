#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIInputView_symbols(JSContext*);
@protocol UIInputViewInstanceExports<JSExport>
@property (readonly,nonatomic) UIInputViewStyle inputViewStyle;
@property (assign,nonatomic) BOOL allowsSelfSizing;
JSExportAs(initWithFrameInputViewStyle,
-(id) jsinitWithFrame: (CGRect) frame inputViewStyle: (UIInputViewStyle) inputViewStyle );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIInputViewClassExports<JSExport>
@end
#pragma clang diagnostic pop