#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIFontDescriptor_symbols(JSContext*);
@protocol UIFontDescriptorInstanceExports<JSExport, NSCopyingInstanceExports_, NSSecureCodingInstanceExports_>
@property (readonly,nonatomic) NSString * postscriptName;
@property (readonly,nonatomic) NSDictionary * fontAttributes;
@property (readonly,nonatomic) CGFloat pointSize;
@property (readonly,nonatomic) CGAffineTransform matrix;
@property (readonly,nonatomic) UIFontDescriptorSymbolicTraits symbolicTraits;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(UIFontDescriptor *) fontDescriptorWithSize: (CGFloat) newPointSize ;
-(UIFontDescriptor *) fontDescriptorByAddingAttributes: (NSDictionary *) attributes ;
-(id) jsinit;
-(UIFontDescriptor *) fontDescriptorWithFamily: (NSString *) newFamily ;
-(NSArray *) matchingFontDescriptorsWithMandatoryKeys: (NSSet *) mandatoryKeys ;
-(UIFontDescriptor *) fontDescriptorWithMatrix: (CGAffineTransform) matrix ;
-(UIFontDescriptor *) fontDescriptorWithFace: (NSString *) newFace ;
-(UIFontDescriptor *) fontDescriptorWithSymbolicTraits: (UIFontDescriptorSymbolicTraits) symbolicTraits ;
-(id) objectForKey: (UIFontDescriptorAttributeName) anAttribute ;
JSExportAs(initWithFontAttributes,
-(id) jsinitWithFontAttributes: (NSDictionary *) attributes );
@end
@protocol UIFontDescriptorClassExports<JSExport, NSCopyingClassExports_, NSSecureCodingClassExports_>
+(UIFontDescriptor *) preferredFontDescriptorWithTextStyle: (UIFontTextStyle) style ;
+(UIFontDescriptor *) fontDescriptorWithName: (NSString *) fontName matrix: (CGAffineTransform) matrix ;
+(UIFontDescriptor *) fontDescriptorWithName: (NSString *) fontName size: (CGFloat) size ;
+(UIFontDescriptor *) preferredFontDescriptorWithTextStyle: (UIFontTextStyle) style compatibleWithTraitCollection: (UITraitCollection *) traitCollection ;
+(UIFontDescriptor *) fontDescriptorWithFontAttributes: (NSDictionary *) attributes ;
@end
#pragma clang diagnostic pop